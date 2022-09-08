import * as React from 'react'
import { IoHeartOutline } from '@react-icons/all-files/io5/IoHeartOutline'
import { AiOutlineRetweet } from '@react-icons/all-files/ai/AiOutlineRetweet'

import styles from './styles.module.css'

/**
 * @see https://developer.twitter.com/en/docs/twitter-for-websites/web-intents/overview
 */
export const PageActions: React.FC<{ tweet: string }> = ({ tweet }) => {
  return (
    <div className={styles.pageActions}>
      <a
        className={styles.likeTweet}
        href={`https://twitter.com/intent/like?tweet_id=${tweet}`}
        target='_blank'
        rel='noopener noreferrer'
        title='پسند کردن در توییتر'
      >
        <IoHeartOutline />
      </a>

      <a
        className={styles.retweet}
        href={`https://twitter.com/intent/retweet?tweet_id=${tweet}`}
        target='_blank'
        rel='noopener noreferrer'
        title='ریتوییت در توییتر'
      >
        <AiOutlineRetweet />
      </a>
    </div>
  )
}
