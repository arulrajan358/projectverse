import { MOCK_PROJECTS, MOCK_MENTORS, MOCK_BLOGS } from "./data";

class MockDb {
  project = {
    findMany: async (args?: { where?: { isTrending?: boolean, category?: string } }) => {
      let data = [...MOCK_PROJECTS];
      if (args?.where?.isTrending !== undefined) {
        data = data.filter(p => p.isTrending === args?.where?.isTrending);
      }
      if (args?.where?.category) {
        data = data.filter(p => p.category === args?.where?.category);
      }
      return data;
    },
    findUnique: async (args: { where: { id?: string; slug?: string } }) => {
      return MOCK_PROJECTS.find(
        p => p.id === args.where.id || p.slug === args.where.slug
      ) || null;
    }
  };

  mentorProfile = {
    findMany: async () => MOCK_MENTORS,
    findUnique: async (args: { where: { id?: string; userId?: string } }) => {
      return MOCK_MENTORS.find(m => m.id === args.where.id) || null;
    }
  };

  blogPost = {
    findMany: async () => MOCK_BLOGS,
    findUnique: async (args: { where: { slug?: string } }) => {
      return MOCK_BLOGS.find(b => b.slug === args.where.slug) || null;
    }
  };

  user = {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    findUnique: async (args?: { where: { clerkUserId?: string; email?: string } }) => {
      return {
        id: "usr-1",
        email: "student@studentshub.in",
        name: "Arjun Verma",
        role: "STUDENT"
      };
    }
  };
}

export const db = new MockDb();
