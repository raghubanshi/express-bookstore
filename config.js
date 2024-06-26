/** Common config for bookstore. */


let DB_URI = `postgresql://praveen:123@127.0.0.1:5432`;

if (process.env.NODE_ENV === "test") {
  DB_URI = `${DB_URI}/books-test`;
} else {
  DB_URI = process.env.DATABASE_URL || `${DB_URI}/books`;
}


module.exports = { DB_URI };