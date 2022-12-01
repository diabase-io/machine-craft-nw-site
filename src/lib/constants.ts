import { NOTION_KEY } from '$env/static/private'
import { Client } from '@notionhq/client'

export const BLOGS_DIR = 'src/lib/blogs'

export const NOTION_CLIENT = new Client({ auth: NOTION_KEY })
