
FIXES from cs157
in database.js
const conn = mongoose.connect(
  Need to comment out useFindAndModify to get Mongoose working

  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useFindAndModify: false      <  -------- need to comment out this line 
  },

upgraded node to v19.4.0 may have caused this
use node -v to check your version


because the files within node_modules should not be uploaded into git, within the node_modules directory 
place the file '.gitignore' with contents

*
!.gitignore

(i.e. asterisk * followed by !.gitignore)

git commands
to upload files into git
git add .                          (every file that has changed/new except within node_modules which has .gitignore)
git add file.html                  (a specific file)
git commit -m "a descriptive term" 
git push                           (pushes up into git)

IF a error is made (like forgetting .gitnore in node_modules)
to undo commits (before uploading)
do
git reset            (basiclly starting from scratch, )



