'use strict';

var sql = require('./db')

var Task = function(task){
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

Task.createTask = function(newTask,result){
    sql.query("INSERT INTO tasks set ?",newTask,function(err,res){
        if(err){
            console.log("error : ",err);
            result(err,null);
        }
        else{
            console.log(res.insertId);
            result(null,res.insertId);
        }
    });
};

Task.getTaskById = function(taskId, result){
    sql.query("select task from tasks WHERE id = ?",taskId,function(err,res){
        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,res);
        }
    });
};

Task.getAllTask = function(result){
    sql.query("SELECT * FROM tasks",function(err,res){
        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            console.log("Tasks :",res)
            result(null,res);
        }
    });
};

Task.updateById = function(id,task,result){
    sql.query("update tasks set task = ? WHERE id = ? ",[task.task,id],function(err,res){
        if(err){
            console.log(err); result(err,null);
        }
        else{
            console.log("Updated task : ",res);
            result(null,res);
        }
    });
};

Task.Remove = function(id,result){
    sql.query("DELETE from tasks where id=?",[id],function(err,res){
        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            result(null,res);
        }
    });
};

module.exports = Task;