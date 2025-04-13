import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-2 text-xl font-semibold tracking-tighter">About Me</h1>
      <p className="mb-4">
        {`I am software engineer with experience building and maintaining backend services, 
        colleague facing tools and data pipelines. Demonstrated success working in agile teams delivering products to production. 
        My interest and expertise lies in utilising cloud infrastructure and applying software architecture best practices to deliver robust and maintainable software`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
