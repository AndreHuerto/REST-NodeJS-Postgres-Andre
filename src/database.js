import{ Pool } from 'pg'

export const pool = new Pool({
    host:'ec2-3-231-194-96.compute-1.amazonaws.com',
    user: 'ijgscmdjngimsj',
    password: 'cd4fc29b17b9873582322148ed231ddf5aa6614c1def450d8643266c52753f26',
    database:'dc5ctlnqr44ghe',
    port: 5432,
    ssl: { rejectUnauthorized: false }
})