import MySQLdb
from flask import Flask
from flask.globals import request
from flask.wrappers import Response
from flask_mysqldb import MySQL
import MySQLdb.cursors
import json
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'udemy'

mysql = MySQL(app)

#getting all user data
@app.route("/user", methods=["GET"])
@cross_origin()
def users():
    cur = mysql.connection.cursor()
    users = cur.execute("SELECT * FROM signup")
    if users > 0:
        userDetails = cur.fetchall()
        return Response(response= json.dumps(userDetails),status=200, mimetype="application/json")
    else:
        return Response(response= json.dumps({"message":"no users found"}))
        
# signup
@app.route("/signup", methods = ["GET","POST"])
@cross_origin()
def signup():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        password = request.form['password']
        
        cur = mysql.connection.cursor()
        if name != '' and email != '' and password !='':
            cur.execute("INSERT INTO signup (name, email, password) VALUES(%s, %s, %s)", (name, email, password))
            mysql.connection.commit()
            cur.close()
            return Response(
                response= json.dumps({
                    "message": "User Created",
                }), status=200,mimetype="application/json")
        else:
            return Response(
                response= json.dumps({
                    "message": "user not created because fields are empty",
                }), status=200,mimetype="application/json")
            
# login            
@app.route("/login", methods = ["GET","POST"])
@cross_origin()
def login():
    if request.method == 'POST' and 'email' in request.form and 'password' in request.form:
        email = request.form['email']
        password = request.form['password']
        cur = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        users = cur.execute('SELECT * FROM signup WHERE email = % s AND password = % s', (email, password))
        if users > 0:
            userDetails = cur.fetchone()
            return Response(
                response= json.dumps(userDetails),
                status=200, 
                mimetype="application/json")

# course_intro
@app.route("/course_intro", methods = ["GET"])
@cross_origin()
def course_intro():
    cur = mysql.connection.cursor()
    data = cur.execute("SELECT * FROM course_intro")
    if data > 0:
        course_intro = cur.fetchall()
        return Response(response= json.dumps(course_intro),status=200, mimetype="application/json")
    else:
        return Response(response= json.dumps("none"))
    
# categories
@app.route("/categories", methods = ["GET"])
@cross_origin()
def get_category():
    cur = mysql.connection.cursor()
    data = cur.execute("SELECT * FROM categories")
    if data > 0:
        category = cur.fetchall()
        return Response(response= json.dumps(category),status=200, mimetype="application/json")
    else:
        return Response(response= json.dumps("none"))
    
# what you will learn  
@app.route('/whatlearn/<path:subpath>', methods=["GET"])
@cross_origin()
def get_what_you_will_learn(subpath):
    cur = mysql.connection.cursor()
    data = cur.execute("SELECT * FROM what_you_will_learn WHERE course_id=%s",(subpath))
    if data > 0:
        whatLearn = cur.fetchall()
        return Response(response= json.dumps(whatLearn),status=200, mimetype="application/json")
    else:
        return Response(response= json.dumps("none"))
    
# who this course is for    
@app.route('/whoCourse/<path:subpath>', methods=["GET"])
@cross_origin()
def get_who_this_course_for(subpath):
    cur = mysql.connection.cursor()
    data = cur.execute("SELECT * FROM who_this_course_for WHERE course_id=%s",(subpath))
    if data > 0:
        whoCourse = cur.fetchall()
        return Response(response= json.dumps(whoCourse),status=200, mimetype="application/json")
    else:
        return Response(response= json.dumps("none"))
  
# single course    
@app.route('/singleCourse/<path:subpath>', methods=["GET"])
@cross_origin()
def get_single_course(subpath):
    cur = mysql.connection.cursor()
    data = cur.execute("SELECT * FROM course_intro WHERE course_id=%s",(subpath))
    if data > 0:
        course = cur.fetchone()
        return Response(response= json.dumps(course),status=200, mimetype="application/json")
    else:
        return Response(response= json.dumps("none"))

# course content   
@app.route('/courseContent/<path:subpath>', methods=["GET"])
@cross_origin()
def get_course_content(subpath):
    cur = mysql.connection.cursor()
    data = cur.execute("SELECT * FROM content WHERE course_id=%s",(subpath))
    if data > 0:
        course_content = cur.fetchall()
        return Response(response=json.dumps(course_content), status=200, mimetype="application/json")
    else:
        return Response(response= json.dumps("none"))
    
# course content -  description   
@app.route('/courseContentDescription/<path:subpath>/<path:subpath1>', methods=["GET"])
@cross_origin()
def get_course_content_description(subpath,subpath1):
    cur = mysql.connection.cursor()
    data = cur.execute("SELECT * FROM course_content WHERE course_id=%s AND content_id=%s",(subpath,subpath1))
    if data > 0:
        course_content_description = cur.fetchall()
        return Response(response=json.dumps(course_content_description), status=200, mimetype="application/json")
    else:
        return Response(response= json.dumps("none"))


# course description  
@app.route('/courseDescription/<path:subpath>', methods=["GET"])
@cross_origin()
def get_course_description(subpath):
    cur = mysql.connection.cursor()
    data = cur.execute("SELECT * FROM course_description WHERE course_id=%s",(subpath))
    if data > 0:
        course = cur.fetchone()
        return Response(response= json.dumps(course),status=200, mimetype="application/json")
    else:
        return Response(response= json.dumps("none"))
    
 # category   
@app.route("/category/<path:subpath>", methods=["GET"])
@cross_origin()
def get_course_category(subpath):
    cur = mysql.connection.cursor()
    data = cur.execute("SELECT * FROM course_intro WHERE c_category=%s",(subpath))
    if data > 0:
        category = cur.fetchall()
        return Response(
            response= json.dumps(category),
            status=200, 
            mimetype="application/json")
    else:
        return Response(response= json.dumps("none"))
        
# comments
@app.route("/comments/<path:subpath>", methods=["GET"])
@cross_origin()
def get_course_comments(subpath):
    cur = mysql.connection.cursor()
    data = cur.execute("SELECT * FROM comments WHERE course_id=%s",(subpath))
    if data > 0:
        comments = cur.fetchall()
        return Response(
            response= json.dumps(comments),
            status=200, 
            mimetype="application/json")
    else:
        return Response(response= json.dumps("none"))
        
# create comments
@app.route("/create_comments", methods=["GET","POST"])
@cross_origin()
def post_course_comments():
    if request.method == 'POST':
        name = request.form['name']
        course_id = request.form['course_id']
        review = request.form['review']
        rating = request.form['rating']
        
        if name !='' and course_id != '' and review != '' and rating != '' :
            cur = mysql.connection.cursor()
            cur.execute("INSERT INTO comments(course_id,name,rating,review) VALUES(%s,%s,%s,%s)",(course_id, name, rating, review))
            mysql.connection.commit()
            cur.close()
            return Response(
                response= json.dumps({
                    "message": "commment completion",
                }), status=200,mimetype="application/json")
        else:
            return Response(
                response= json.dumps({
                    "message": "cannot complete project something went error",
                }), status=200,mimetype="application/json")
  
 # search           
@app.route("/search/<path:subpath>", methods=["GET"])
@cross_origin()
def get_search(subpath):
    searchQuery = "%"+ subpath + "%"
    cur = mysql.connection.cursor()
    data = cur.execute("SELECT * FROM course_intro WHERE c_title LIKE %s",[searchQuery])
    if data > 0:
        search = cur.fetchall()
        return Response(
            response= json.dumps(search),
            status=200, 
            mimetype="application/json")
    else:
        return Response(response= json.dumps("none"))
    
# contact us
@app.route("/contact", methods=["GET","POST"])
@cross_origin()
def post_contact():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        phone = request.form['phone']
        msg = request.form['msg']
        
        if name !='' and email != '' and phone != '' and msg != '' :
            cur = mysql.connection.cursor()
            cur.execute("INSERT INTO contact(name,email,phone,msg) VALUES(%s,%s,%s,%s)",(name,email,phone,msg))
            mysql.connection.commit()
            cur.close()
            return Response(
                response= json.dumps("true"), status=200,mimetype="application/json")
        else:
            return Response(
                response= json.dumps({
                    "message": "cannot complete contact something went error",
                }), status=200,mimetype="application/json")
          

if __name__ == '__main__':
    app.run(debug=True, port=5000)