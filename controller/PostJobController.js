const post = require('../model/PostJob')

const postController = {
    async CreateJob (req,res){
        try{
            const {jobTitle,salary,location,jobType,experience,field,description} = req.body;
            if (!jobTitle||!salary||!location||!jobType||!experience||!field||!description){
              return res.status(400).json({message:"all fields required"})
            }
            const exitingPost = await post.findOne({description});
            if (exitingPost)
            {
                return res.status(400).json({message:"Job already exist"})
            }
              //create Job
              const newPost = new post({
                jobTitle,
                salary,
                location,
                jobType,
                experience,
                field,
                description
              })
              await newPost.save()
             
              // const token = jwt.sign(req.body)
              res.json({newPost})
        }
        catch(error){
                res.status(500).json({message:"internal server error",error:error.message})
        }
        
    },
    async getJostPosts(req,res){
      const allJobs = await post.find();
      // const transformedUsers = users.map(user => user.toJSON());
    
      return res.status(200).json(allJobs);
    }
   
    
  
}
module.exports = postController