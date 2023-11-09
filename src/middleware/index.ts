import { GraphQLError } from "graphql";

export const authorizeUser = (req: any) => {
  if (!req.user) {
    throw new GraphQLError("User is not authenticated", {
      extensions: {
        code: "UNAUTHENTICATED",
        http: { status: 401 },
      },
    });
  }
};
