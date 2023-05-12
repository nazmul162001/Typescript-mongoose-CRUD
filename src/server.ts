import mongoose from 'mongoose'
import app from './app'
const port: number = 5000

//database connection
async function main() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/practice-mongoose')
    console.log(`🎉Database connection established`)
    // when successfully connected the database, this port will be used
    // listening port
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`)
    })
  } catch (error) {
    console.log(`❌Failed to connect to Database`, error)
  }
}
// call the function
main()
