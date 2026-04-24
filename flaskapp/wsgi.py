from flask import Flask, render_template, request, redirect
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///tasks.db'
db = SQLAlchemy(app)

class Todo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(200), nullable=False)
    desc = db.Column(db.String(1000), nullable=False)
    date_created = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return f"<Todo {self.id}>"

with app.app_context():  # Ensure that the application context is active when creating the database tables 
    db.create_all()

@app.route("/", methods=["GET", "POST"])
def hello_world():
    if request.method == "POST":
        t = request.form.get("title")
        d= request.form.get("desc")
        todo = Todo(content=t, desc=d)
        db.session.add(todo)
        db.session.commit()
        return redirect("/")
    
    all_todos = Todo.query.all()    
    return render_template("home.html", todos=all_todos)

#full request lifecycle
#first broweser send https request to the server , flask matches it to hello world function and function is executed 
# and return value is captured, the response is generated and sent to the browser 
# and browser render it to the user diplaying the result

@app.route("/delete/<int:id>")
def delete(id):
    todo = Todo.query.get_or_404(id)
    db.session.delete(todo)
    db.session.commit()
    return redirect("/")


if __name__ == "__main__":
    app.run(debug=True)