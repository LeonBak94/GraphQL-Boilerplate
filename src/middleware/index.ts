export const authorizeUser = (req: any) => {
  if (!req.user) {
    throw new Error("You must be logged in to access this resource");
  }
};
