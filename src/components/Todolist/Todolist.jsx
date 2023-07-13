import { useState } from "react";
import "./todolist.css";
import { Button, Card, Input, Space, Typography } from "antd";
import { CheckOutlined, DeleteOutlined } from "@ant-design/icons";
const { Title, Text } = Typography;

// eslint-disable-next-line react/prop-types
function Todolist({t}) {
  const [todoTasks, setTodoTasks] = useState([
    {
      type: "todo",
      content: "This is task 1",
      createdAt: "Thu Jul 13 2023",
    },
    {
      type: "todo",
      content: "This is task 2",
      createdAt: "Thu Jul 13 2023",
    },
  ]);
  const [doingTasks, setDoingTasks] = useState([
    {
      type: "doing1",
      content: "This is task 1",
      createdAt: "Thu Jul 13 2023",
    },
    {
      type: "doing2",
      content: "This is task 2",
      createdAt: "Thu Jul 13 2023",
    },
  ]);
  const [doneTasks, setDoneTasks] = useState([
    {
      type: "done",
      content: "This is task 1",
      createdAt: "Thu Jul 13 2023",
    },
    {
      type: "done",
      content: "This is task 2",
      createdAt: "Thu Jul 13 2023",
    },
  ]);

  const [contentTodo, setContentTodo] = useState(null);
  const [contentDoing, setContentDoing] = useState(null);
  const [contentDone, setContentDone] = useState(null);

  function getTodoTask(e) {
    setContentTodo(e.target.value);
  }
  function setTodo() {
    if (contentTodo !== null) {
      const date = new Date();
      let task = {
        type: "todo",
        content: contentTodo,
        createdAt: "created: " + date.toLocaleString(),
      };
      setTodoTasks([...todoTasks, task]);
      setContentTodo(null);
    }
  }

  function getDoingTask(e) {
    setContentDoing(e.target.value);
  }
  function setDoing() {
    if (contentDoing !== null) {
      const date = new Date();
      let task = {
        type: "doing",
        content: contentDoing,
        createdAt: "created: " + date.toLocaleString(),
      };
      setDoingTasks([...doingTasks, task]);
      setContentDoing(null);
    }
  }

  function getDoneTask(e) {
    setContentDone(e.target.value);
  }
  function setDone() {
    if (contentDone !== null) {
      const date = new Date();
      let task = {
        type: "done",
        content: contentDone,
        createdAt: "created: " + date.toLocaleString(),
      };
      setDoneTasks([...doneTasks, task]);
      setContentDone(null);
    }
  }

  function changeState(e){
    console.log(e);
  }

  return (
    <Space className="todo-container">
      <Space direction="vertical">
        <Title level={1} style={{ textAlign: "center", color:"white" }}>
          {t("content.todolist.title")}
        </Title>
        <Space className="todo-main" size="large">
          <Space className="todo-tasks" direction="vertical" size={16}>
            <Title level={3} style={{ textAlign: "center" }}>
              Todo Task ({todoTasks.length})
            </Title>
            <Space>
              <Input
                placeholder="Add to do task"
                value={contentTodo}
                onChange={getTodoTask}
              ></Input>
              <Button type="primary" onClick={setTodo}>
                Add
              </Button>
            </Space>
            {todoTasks.map((task, index) => (
              <Card
                className="card-main"
                bodyStyle={{ padding: "10px" }}
                key={index}
                actions={[]}
              >
                <Space direction="vertical" style={{ width: "80%" }}>
                  <Text className="card-content">{task.content}</Text>
                  <Text>{task.createdAt}</Text>
                </Space>
                <Space
                  direction="vertical"
                  style={{ width: "20%" }}
                  size="small"
                >
                  <Button style={{ color: "green", border: "none" }} onClick={changeState}>
                    <CheckOutlined />
                  </Button>
                  <Button style={{ color: "red", border: "none" }}>
                    <DeleteOutlined />
                  </Button>
                </Space>
              </Card>
            ))}
          </Space>
          <Space className="todo-doing" direction="vertical" size={16}>
            <Title level={3} style={{ textAlign: "center" }}>
              Doing Task ({doingTasks.length})
            </Title>
            <Space>
              <Input
                placeholder="Add to doing task"
                value={contentDoing}
                onChange={getDoingTask}
              ></Input>
              <Button type="primary" onClick={setDoing}>
                Add
              </Button>
            </Space>
            {doingTasks.map((task, index) => (
              <Card
                className="card-main"
                bodyStyle={{ padding: "10px" }}
                key={index}
              >
                <Space direction="vertical" style={{ width: "80%" }}>
                  <Text className="card-content">{task.content}</Text>
                  <Text>{task.createdAt}</Text>
                </Space>
                <Space
                  direction="vertical"
                  style={{ width: "20%" }}
                  size="small"
                >
                  <Button style={{ color: "green", border: "none" }}>
                    <CheckOutlined />
                  </Button>
                  <Button style={{ color: "red", border: "none" }}>
                    <DeleteOutlined />
                  </Button>
                </Space>
              </Card>
            ))}
          </Space>
          <Space className="todo-done" direction="vertical" size={16}>
            <Title level={3} style={{ textAlign: "center" }}>
              Done Task ({doneTasks.length})
            </Title>
            <Space>
              <Input
                placeholder="Add to done task"
                value={contentDone}
                onChange={getDoneTask}
              ></Input>
              <Button type="primary" onClick={setDone}>
                Add
              </Button>
            </Space>
            {doneTasks.map((task, index) => (
              <Card
                className="card-main"
                bodyStyle={{ padding: "10px" }}
                key={index}
              >
                <Space direction="vertical" style={{ width: "80%" }}>
                  <Text className="card-content">{task.content}</Text>
                  <Text>{task.createdAt}</Text>
                </Space>
                <Space
                  direction="vertical"
                  style={{ width: "20%" }}
                  size="small"
                >
                  <Button style={{ color: "green", border: "none" }}>
                    <CheckOutlined />
                  </Button>
                  <Button style={{ color: "red", border: "none" }}>
                    <DeleteOutlined />
                  </Button>
                </Space>
              </Card>
            ))}
          </Space>
        </Space>
      </Space>
    </Space>
  );
}

export default Todolist;
