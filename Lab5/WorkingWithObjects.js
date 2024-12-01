const assignment = {
  id: 1,
  title: "NodeJS Assignment",
  description: "Create a NodeJS server with ExpressJS",
  due: "2021-10-10",
  completed: false,
  score: 0,
};

const module = {
  id: "CS101",
  name: "Introduction to Programming",
  description: "A beginner's guide to programming.",
  course: "Computer Science",
  completed: false,
  score: 0,
};

export default function WorkingWithObjects(app) {
  // Assignment routes
  app.get("/lab5/assignment", (req, res) => {
    res.json(assignment);
  });

  app.get("/lab5/assignment/title", (req, res) => {
    res.json(assignment.title);
  });

  app.get("/lab5/assignment/title/:newTitle", (req, res) => {
    const { newTitle } = req.params;
    assignment.title = newTitle;
    res.json(assignment);
  });

  // Module routes
  app.get("/lab5/module", (req, res) => {
    res.json(module);
  });

  app.get("/lab5/module/name", (req, res) => {
    res.json(module.name);
  });

  app.get("/lab5/module/name/:newName", (req, res) => {
    const { newName } = req.params;
    module.name = newName;
    res.json(module);
  });

  app.get("/lab5/module/description/:newDescription", (req, res) => {
    const { newDescription } = req.params;
    module.description = newDescription;
    res.json(module);
  });

  app.get("/lab5/module/score/:newScore", (req, res) => {
    const { newScore } = req.params;
    module.score = parseInt(newScore, 10);
    res.json(module);
  });

  app.get("/lab5/module/completed/:status", (req, res) => {
    const { status } = req.params;
    module.completed = status === "true";
    res.json(module);
  });
}
