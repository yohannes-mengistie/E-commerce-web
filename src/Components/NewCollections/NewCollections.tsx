import React from 'react'
import styles from './NewCollections.module.css'
import { Item } from '../Item/Item'
import new_collections from '../Assets/new_collections.ts'

export const NewCollections = () => {
  return (
    <div className={styles.newcollections}>
        <h1>NEW COLLECTIONS</h1>
        <hr/>
        <div className={styles.collections}>
              {new_collections.map((collection,i) => {
                return <Item key={i} id={collection.id} name={collection.name} image={collection.image} new_price={collection.new_price} old_price={collection.old_price} />
              })}
        </div>
    </div>
  )
}
