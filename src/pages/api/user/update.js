import { getSession } from "next-auth/react";
import prisma from "../../../server/prismaClient";

export default async function handler(req, res) {
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).json({ message: "Unathorised" });
  }

  const { id, role } = req?.body;

  const updateUser = await prisma.user.update({
    where: {
      id,
    },
    data: {
      role
    },
    select: {

    }
  })


  // return res.status(200).json('');
  return res.status(200).json(updateUser);
}