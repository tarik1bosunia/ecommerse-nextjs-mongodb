import Users from "../models/user"

// GET:: http://localhost:3000/api/users/
export async function getUsers(req, res){
    try {
        const users = await Users.find({})
        if(!users) return res.status(404).json({error : "Data not found!!!"})
        res.status(200).json({users : users})
        
    } catch (error) {
        res.status(404).json({error : "Error while fetching data."})
    }
}

// GET:: http://localhost:3000/api/users/1
export async function getUser(req, res){
    try {
        const {userId} = req.query;

        const user = await Users.findById(userId)
        if(!user) return res.status(404).json({error : "User Data not found!!!"})
        
        res.status(200).json({user : user})
        
    } catch (error) {
        res.status(404).json({error : "Can't get the user. Error while fetching data."})
    }
}


// post:: http://localhost:3000/api/users/
export async function createUser(req, res){
    try {
        const formData = req.body
        if(!formData) return res.status(404).json({error : "Form data not provided !!!"})
        
        const cratedUSer = await Users.create(formData)
        
        return res.status(200).json({cratedUSer })
        
    } catch (error) {
        res.status(500).json({error : "Error while fetching data."})
    }
}

// put:: http://localhost:3000/api/users/?userId=6484bd1fe34872b20da89a70
export async function updateUser(req, res){
    try {
        const {userId} = req.query;
        const formData = req.body;
        if(userId && formData){
            const previousUser = await Users.findByIdAndUpdate(userId, formData);
            const updatedUser = await Users.findById(userId);
            console.log("updtedUser" , updateUser)
            return res.status(200).json({message: "user information updated",previousUser: previousUser, updatedUser: updatedUser})
        }
        return res.status(400).json({error: "user info updated failed...!"})
        
    } catch (error) {
        res.status(500).json({error : "Error while Updating data ...!"})
    }
}

// delete:: http://localhost:3000/api/users/?userId=6484bd1fe34872b20da89a70
export async function deleteUser(req, res){
    try {
        const { userId } = req.query;
        if (userId) {
            const deletedUser = await Users.findByIdAndDelete(userId);
            if(deletedUser !== null)
                return res.status(200).json({ message: "User information deleted successfully!", deletedUser: deletedUser });
            return res.status(400).json({ message: "User with this Id does not exist...!"});   
        }
        
        return res.status(400).json({ error: "User info deletion failed!" });
    
    } catch (error) {
        return res.status(500).json({ error: "Error while deleting data!" });
    }
}