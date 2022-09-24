import { useQuery } from "@apollo/client";
import { gql } from "apollo-server-core";
import Head from "next/head";
import { initializeApollo } from "../lib/client";
import styles from "../styles/Home.module.css";

const TaskQueryDocument = gql`
  query Tasks {
    tasks {
      id
      title
      status
    }
  }
`;

interface TasksQuery {
  tasks: {
    id: number;
    title: string;
    status: string;
  }[];
}

export default function Home() {
  const result = useQuery<TasksQuery>(TaskQueryDocument);
  const tasks = result.data?.tasks;

  return (
    <div className={styles.container}>
      <Head>
        <title>Tasks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        {tasks &&
          tasks.length > 0 &&
          tasks.map((task) => {
            return (
              <div key={task.id}>
                {task.title} ({task.status})
              </div>
            );
          })}
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query<TasksQuery>({
    query: TaskQueryDocument,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};
