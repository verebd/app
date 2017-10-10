'use strict';

const MongoClient = require('mongodb').MongoClient;
const TaskDAO = require('./db/tasksDAO');
const express = require('express');
const app = express();

const url = 'mongodb://localhost:27017/jstestapp';
let mongodb;

MongoClient.connect(url, {
  poolSize: 10
}, function (err, db) {
  mongodb = db;

  TaskDAO.createTask(db, 'open', 'easy', 'topic6', 'lalala', ['a', 'b', 'c', 'd'], 'd');
  TaskDAO.updateTask(db, 'q1', 'topic', 'trial3');
  db.close();


  // taskDb.find(function(err, dbs) {
  //   test.equal(null, err);
  //   test.ok(dbs.length > 0);
  //   db.close();
  // });
});

app.get('/', (req, res) => {

});







