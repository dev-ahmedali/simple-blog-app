import React from 'react'
import { useSelector } from 'react-redux'
import Filter from './Filter'
import Header from './Header'
import Post from './Post'

export default function PostContainer() {
    const {filtered_post: posts, filterBy} = useSelector((state) => state)
    const filter = Object.keys(filterBy)
  return (
    <div className='relative max-w-7x1 mx-auto'>
        <Header/>
        {filter.length > 0 && (
            filter.map((name, index) => {
                return <Filter key={index} name={name} value={filterBy[name]}/>
            })
        )}

        {posts.length < 1 &&  (
            <p className="text-xl font-bold text-red-400">No Post Found</p>
        )}
         <div className="mt-12 max-w-lg grid gap-5 lg:grid-cols-3 lg:max-w-none">
        {posts.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
      </div>
    </div>
  )
}
