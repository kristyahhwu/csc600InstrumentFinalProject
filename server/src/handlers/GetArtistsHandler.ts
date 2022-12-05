import { DB } from '../Database';
import { MessageHandler } from '../MessageHandler';

async function onMessage(): Promise<any> {
    const artists = await DB.runQuery('get_artists');
  
    console.log('artists message');
  
    return { artists };
  }
  
  // Our schema can be empty, as we are not expecting any data with the message
  const schema = {};
  
  export const GetartistsHandler = new MessageHandler(
    'get_artists',
    schema,
    onMessage,
  );