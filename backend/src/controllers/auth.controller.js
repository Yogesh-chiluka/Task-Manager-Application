import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { OAuth2Client } from 'google-auth-library'
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const generateAccessAndRefreshTokens = async(userId) =>{
    try{
        
        const user= await User.findById(userId)
       
        const accessToken =  user.generateAccessToken()
       
        const refreshToken = user.generateRefreshToken()
        
        user.refreshtoken = refreshToken
        await user.save({ validateBeforeSave: false })

        return {accessToken,refreshToken}

    }catch(error){
       // console.log(error)
        throw new ApiError(500,"Something went wrong while generating token")
    }

}   
    

//user registration

const userRegistration = asyncHandler(async(req, res) =>{
    const { name, email, password} = req.body;

    if(
        [name, email, password].some((field) =>
        field?.trim() === "") 
    ){
        throw new ApiError(400, "All field are required")
    }

    const user = await User.findOne({ email });

    if(user){
        throw new ApiError(400, 'User already exists');
    }

    const createUser = await User.create({
        name : username.toLowerCase(),
        email: email.toLowerCase(),
        password,   
    })

    const createdUser = await User.findById(createUser._id).select(
        "-password"
    )

    if(!createdUser){
        throw new ApiError(500, "Something went wrong while registering the user")
    }

    return res.status(201).json(
        new ApiResponse(201, createdUser, "User registered Successfully")
    )
    
})


const userLogin = asyncHandler( async(req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if(!user){
        throw new ApiError(400, 'Invaild Credentials');
    }

    const isPasswordValid = await user.isPasswordCorrect(password)

    if(!isPasswordValid){
        throw new ApiError(400,"Invalid user credentials")
    }

    const {accessToken, refreshToken} = await generateAccessAndRefreshTokens(user._id);
    

    const loggedInUser = await User.findById(user._id).select("-password");

    return res
    .status(200)
    .json(
        new ApiResponse(
            200,
            {
                user: loggedInUser, accessToken, refreshToken
            },
            "User logged In Successfully"
        )
    )
})

const googleLogin = asyncHandler( async(req, res) => {

    const { token } = req.body;

    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_CLIENT_ID
    });

    const { sub, email, name, picture } = ticket.getPayload();

    const user = await User.findOne({ googleId: sub });

    if(user){
        const {accessToken, refreshToken} = await generateAccessAndRefreshTokens(user._id);
        return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                {
                    user: loggedInUser, accessToken, refreshToken
                },
                "User logged In Successfully"
            )
        )
    }

    const createdUser = new User({
        googleId: sub,
        email,
        name,
        picture,
    })

    const {accessToken, refreshToken} = await generateAccessAndRefreshTokens(createdUser._id);
    

    const loggedInUser = await User.findById(user._id).select("-password");

    return res
    .status(200)
    .json(
        new ApiResponse(
            200,
            {
                user: loggedInUser, accessToken, refreshToken
            },
            "User logged In Successfully"
        )
    )
})


const userLogout = asyncHandler( async(req, res) => {
    return res
    .status(200)
    .json(
        new ApiResponse(
            200,
            "User logged out Successfully"
        )
    )
})


export { 
    userRegistration, 
    userLogin, 
    googleLogin, 
    userLogout
} 