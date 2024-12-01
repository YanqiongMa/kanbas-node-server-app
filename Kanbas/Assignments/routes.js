import db from "../Database/index.js";

export default function AssignmentRoutes(app) {
  const handleResponse = (res, callback) => {
    try {
      const result = callback();
      res.status(result ? 200 : 204).json(result || {});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  app.get("/api/courses/:cid/assignments", (req, res) =>
    handleResponse(res, () => {
      const { cid } = req.params;
      return db.assignments.filter((assignment) => assignment.course === cid);
    })
  );

  app.post("/api/courses/:cid/assignments", (req, res) =>
    handleResponse(res, () => {
      const { cid } = req.params;
      const newAssignment = {
        ...req.body,
        course: cid,
        _id: new Date().getTime().toString(),
      };
      db.assignments.push(newAssignment);
      return newAssignment;
    })
  );

  app.delete("/api/assignments/:mid", (req, res) =>
    handleResponse(res, () => {
      const { mid } = req.params;
      db.assignments = db.assignments.filter((assignment) => assignment._id !== mid);
      return null; // 204 No Content
    })
  );

  app.put("/api/assignments/:mid", (req, res) =>
    handleResponse(res, () => {
      const { mid } = req.params;
      const index = db.assignments.findIndex((assignment) => assignment._id === mid);
      if (index !== -1) {
        db.assignments[index] = {
          ...db.assignments[index],
          ...req.body,
        };
      }
      return null; // 204 No Content
    })
  );
}
