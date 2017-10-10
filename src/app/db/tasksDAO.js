'use strict';

class TaskDAO {

  createTask(db, type, difficulty, topic, text, options, solution) {
    let id = db.collection('tasks').count() + 1;
    let created = new Date(Date.now());
    let newTask = {};

    newTask.ID = id;
    newTask.created = created;
    newTask.difficulty = difficulty;
    newTask.type = type;
    newTask.topic = topic;
    newTask.text = text;
    newTask.options = options;
    newTask.solution = solution;

    db.collection('tasks').insertOne(newTask);
  }

  updateTask(db, id, attribute, value) {
    let updateObject = {};
    updateObject[attribute] = value;
    db.collection('tasks').updateOne(
      {"ID": id},
      {"$set": updateObject}
    )
  }
}

module.exports = new TaskDAO();
