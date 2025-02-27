import * as React from 'react'
import * as types from 'lib/types'
import { PageHead } from './PageHead'

import styles from './styles.module.css'

export const Page404: React.FC<types.PageProps> = ({ site, pageId, error }) => {
  const title = site?.name || 'یافت نشد!'

  return (
    <>
      <PageHead site={site} title={title} />

      <div className={styles.container}>
        <main className={styles.main}>
          <h1>صفحه‌ی مورد نظر یافت نشد!</h1>

          {error ? (
            <p>{error.message}</p>
          ) : (
            pageId && (
              <p>
                اطمینان پیدا کنید که این صفحه &quot;{pageId}&quot; قابلیت دسترسی
                عمومی دارد
              </p>
            )
          )}

          <img
            src='/404.png'
            alt='404 Not Found'
            className={styles.errorImage}
          />
        </main>
      </div>
    </>
  )
}
