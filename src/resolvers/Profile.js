const Profile = {
  user(parent, args, { prisma }, info) {
    console.log(parent, 'Here is the parent')
    return prisma.user.findUnique({ where: { id: parent.id } })
  },
}

export default Profile
