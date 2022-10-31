import { trpc } from '../../utils/trpc'

const PrismaExternal = () => {
    const { data: course, error, isLoading } = trpc.useQuery(['course.getCourse'])
    
    if (isLoading) {
        return <div>Loading..</div>
    }
    if (error) {
        return <div>{error.message}</div>
    }

    return (
        <div>{course?.courseName}</div>
    )
}

export default PrismaExternal