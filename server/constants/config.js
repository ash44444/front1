const corsOptions = {
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

const CHATTU_TOKEN = "chattu-token";

export { corsOptions, CHATTU_TOKEN };
