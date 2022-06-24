import { gql } from "apollo-boost";

export const getTasks = gql`
    query tasks (
        $filterBy: String,
        $order: String,
        $page: Int,
        $allPerPage: Int,  
        ) {
            tasks(
            filterBy: $filterBy,
            order: $order,
            page: $page,
            allPerPage: $allPerPage,
            ) { 
                task {
                    title,
                    done,
                    uuid,
                    created_at
                },
                count
            }
        }
` 
export const postTask = gql `
    mutation addTask (
        $title: String
        ){
            addTask(
                title:$title
            )
        }
`
