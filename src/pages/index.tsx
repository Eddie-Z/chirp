import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { type NextPage } from "next";

import { api } from "~/utils/api";

import Image from "next/image";
import { LoadingPage, LoadingSpinner } from "~/components/loading";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { PageLayout } from "~/components/layout";
import Table from "~/components/table"
import {CostForm} from "~/components/costForm";
// import { PostView } from "~/components/postview";

// const CreatePostWizard = () => {
//   const { user } = useUser();

//   const [input, setInput] = useState("");

//   const ctx = api.useContext();

//   const { mutate, isLoading: isPosting } = api.posts.create.useMutation({
//     onSuccess: () => {
//       setInput("");
//       void ctx.posts.getAll.invalidate();
//     },
//     onError: (e) => {
//       const errorMessage = e.data?.zodError?.fieldErrors.content;
//       if (errorMessage && errorMessage[0]) {
//         toast.error(errorMessage[0]);
//       } else {
//         toast.error("Failed to post! Please try again later.");
//       }
//     },
//   });

//   if (!user) return null;

//   return (

//     <div className="flex w-full gap-3">
//       <UserButton appearance={{
//         elements: {
//           userButtonAvatarBox: {
//             width: 56,
//             height: 56
//           }
//         }
//       }} />
//       <input
//         placeholder="Type some emojis!"
//         className="grow bg-transparent outline-none"
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         onKeyDown={(e) => {
//           if (e.key === "Enter") {
//             e.preventDefault();
//             if (input !== "") {
//               mutate({ content: input });
//             }
//           }
//         }}
//         disabled={isPosting}
//       />
//       {input !== "" && !isPosting && (
//         <button onClick={() => mutate({ content: input })}>Post</button>
//       )}
//       {isPosting && (
//         <div className="flex items-center justify-center">
//           <LoadingSpinner size={20} />
//         </div>
//       )}
//     </div>
//   );
// };

// const Feed = () => {
//   const { data, isLoading: postsLoading } = api.posts.getAll.useQuery();

//   if (postsLoading)
//     return (
//       <div className="flex grow">
//         <LoadingPage />
//       </div>
//     );

//   if (!data) return <div>Something went wrong</div>;

//   return (
//     <div className="flex grow flex-col overflow-y-scroll">
//       {[...data, ...data, ...data, ...data].map((fullPost) => (
//         <PostView {...fullPost} key={fullPost.post.id} />
//       ))}
//     </div>
//   );
// };

const VerticalNavbar = () => {
  return (
    <div className="flex flex-col bg-gray-800 h-screen px-4 py-8">
      <div className="flex flex-col space-y-4">
        <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white py-2 px-4 rounded">
          Start Session
        </a>
        <a href="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white py-2 px-4 rounded">
          Scores
        </a>
        <a href="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white py-2 px-4 rounded">
          Contact
        </a>
      </div>
    </div>
  );
};

interface Data {
  name: string;
  age: number;
  email: string;
}
interface Columns {
  Header: string;
  accessor: string;
}

const data: Data[] = [
  { name: 'Alice', age: 25, email: 'alice@example.com' },
  { name: 'Bob', age: 30, email: 'bob@example.com' },
  { name: 'Charlie', age: 35, email: 'charlie@example.com' },
];

const columns: Columns[]  = [  { Header: 'Name', accessor: 'name' },  { Header: 'Age', accessor: 'age' },  { Header: 'Email', accessor: 'email' },];

const Home: NextPage = () => {
  const { isLoaded: userLoaded, isSignedIn } = useUser();

  // Start fetching asap
  // api.posts.getAll.useQuery();

  // const {data} = api.createGolfCourse.getAll.useQuery();
  // console.log("data", data);

  // Return empty div if user isn't loaded
  if (!userLoaded) return <div />;

  return (
    <PageLayout>
      <div className="flex border-b border-slate-400 p-4">
        {!isSignedIn && (
          <div className="flex justify-center">
            <SignInButton />
          </div>
        )}
        {isSignedIn &&   
        
        <>
             <Table<Data> data={data} columns={columns} />
      
      <CostForm/>
        </>
   
        // <CreatePostWizard />

        }
      </div>
     
      {/* <Feed /> */}
    </PageLayout>
  );
};

export default Home;
