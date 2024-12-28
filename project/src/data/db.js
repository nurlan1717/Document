// Initial database
const db = {
  users: [
    {
      id: "u1",
      fullName: "John Doe",
      username: "johndoe",
      email: "john.doe@example.com",
      password: "$2a$10$XYZ",
      profileImage: "https://via.placeholder.com/150",
      role: "teacher",
      major: "Programming",
      bio: "Passionate about teaching math and programming.",
      socialLinks: {
        linkedin: "https://linkedin.com/in/johndoe",
        twitter: "https://twitter.com/johndoe"
      }
    },
    {
      id: "u2",
      fullName: "Jane Smith",
      username: "janesmith",
      email: "jane.smith@example.com",
      password: "$2a$10$XYZ",
      profileImage: "https://via.placeholder.com/150",
      role: "student",
      major: "IT",
      grades: [
        {
          taskId: "t1",
          grade: 85
        }
      ],
      overallGrade: 87
    },
    {
      id: "u3",
      fullName: "Michael Johnson",
      username: "michaeljohnson",
      email: "michael.johnson@example.com",
      password: "$2a$10$XYZ",
      profileImage: "https://via.placeholder.com/150",
      role: "student",
      major: "Mathematics",
      grades: [
        {
          taskId: "t1",
          grade: 92
        }
      ],
      overallGrade: 90
    }
  ],
  classes: [
    {
      id: "c1",
      name: "Algebra Basics",
      teacherId: "u1",
      topics: ["Linear Equations", "Quadratic Equations"],
      major: "Programming",
      studentIds: ["u2", "u3"],
      schedule: [
        { day: "Monday", time: "10:00 - 11:30" },
        { day: "Wednesday", time: "10:00 - 11:30" }
      ]
    },
    {
      id: "c2",
      name: "Calculus 101",
      teacherId: "u1",
      topics: ["Limits", "Derivatives"],
      major: "Mathematics",
      studentIds: ["u3"],
      schedule: [
        { day: "Tuesday", time: "14:00 - 15:30" },
        { day: "Thursday", time: "14:00 - 15:30" }
      ]
    }
  ],
  tasks: [
    {
      id: "t1",
      classId: "c1",
      title: "Linear Equations Assignment",
      description: "Solve 10 linear equations.",
      topic: "Linear Equations",
      deadline: "2024-01-20T23:59:59Z",
      createdAt: "2024-01-10T09:00:00Z",
      teacherId: "u1",
      assignments: ["a1", "a2"],
      completionRate: 50
    },
    {
      id: "t2",
      classId: "c2",
      title: "Calculus Assignment",
      description: "Solve 5 derivative problems.",
      topic: "Derivatives",
      deadline: "2024-02-10T23:59:59Z",
      createdAt: "2024-01-20T09:00:00Z",
      teacherId: "u1",
      assignments: ["a3"],
      completionRate: 0
    }
  ],
  assignments: [
    {
      id: "a1",
      taskId: "t1",
      studentId: "u2",
      url: "https://example.com/assignment1.pdf",
      assignDate: "2024-01-15T10:00:00Z",
      status: "submitted",
      feedback: "Great effort! Improve presentation next time."
    },
    {
      id: "a2",
      taskId: "t1",
      studentId: "u3",
      url: "https://example.com/assignment2.pdf",
      assignDate: "2024-01-16T11:00:00Z",
      status: "submitted",
      feedback: "Excellent work! Keep it up."
    },
    {
      id: "a3",
      taskId: "t2",
      studentId: "u3",
      url: "https://example.com/assignment3.pdf",
      assignDate: "2024-01-25T12:00:00Z",
      status: "submitted",
      feedback: "Good job, but work on your step-by-step calculations."
    }
  ],
  invitations: [
    {
      id: "i1",
      classId: "c1",
      studentId: "u2",
      status: "accepted",
      expiresAt: "2024-01-15T23:59:59Z"
    },
    {
      id: "i2",
      classId: "c2",
      studentId: "u3",
      status: "accepted",
      expiresAt: "2024-02-01T23:59:59Z"
    }
  ],
  announcements: [
    {
      id: "a1",
      classId: "c1",
      title: "Midterm Exam Date",
      content: "The midterm exam will be held on January 20th.",
      date: "2024-01-10T10:00:00Z"
    },
    {
      id: "a2",
      classId: "c2",
      title: "First Assignment Deadline",
      content: "The first assignment for Calculus is due by February 10th.",
      date: "2024-01-20T10:00:00Z"
    }
  ],
  materials: [
    {
      id: "m1",
      title: "Linear Equations Notes",
      description: "Comprehensive guide to solving linear equations.",
      likes: ["u2", "u3"],
      comments: [
        {
          id: "c1",
          userId: "u2",
          content: "This was super helpful!"
        },
        {
          id: "c2",
          userId: "u3",
          content: "Clear and easy to understand. Thanks!"
        }
      ]
    },
    {
      id: "m2",
      title: "Derivative Techniques",
      description: "A detailed explanation of how to differentiate functions.",
      likes: ["u3"],
      comments: [
        {
          id: "c1",
          userId: "u3",
          content: "Great resource for understanding derivatives!"
        }
      ]
    }
  ]
};

module.exports = db;