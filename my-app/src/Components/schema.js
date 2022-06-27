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
        $title: String!,
        $done: Boolean
        ) {
            addTask(
                title:$title,
                done:$done
            )
        {
            title,
            
        }
    }
`
export const editionTask = gql `
    mutation changeTask (
        $title: String,
        $done: Boolean
        $uuid: String!
        ) {
            changeTask(
                title:$title,
                done:$done
                uuid:$uuid
            )
        {
            uuid,
            
        }
    }
`
export const removeTask = gql `
    mutation removeTask (
        $uuid: String!
        ) {
            removeTask(
                uuid:$uuid
            )
        {
            uuid,
            
        }
    }
`