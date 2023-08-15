import "reflect-metadata"
import app from './app'
import { AppDataSource } from './db'
const test = "test"

async function main(){
    try {
        AppDataSource.initialize()
        console.log('Database Connected')
        app.listen(3000)
        console.log('Server is listening on port', 3000)
    } catch (error) {
        console.log(error)
    }
}

main()



