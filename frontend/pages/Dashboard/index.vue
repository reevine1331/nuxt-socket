<template>
  <div>
    <ChatBoard :messages='messages'></ChatBoard>
    <ChatTextField :text='text' @send='sendMessage'></ChatTextField>
  </div>
</template>

<script>
import io from 'socket.io-client';
import moment from 'moment';

import ChatBoard from '~/components/ChatBoard';
import ChatTextField from '~/components/ChatTextField';
import { log } from 'util';

export default {
  components: {
    ChatBoard,
    ChatTextField
  },
  data() {
    return {
      name:'ebine',
      text: '',
      messages: [],
      socket: io('localhost:3000')
    };
  },
  methods: {
    sendMessage() {
      this.socket.emit('POST_MESSAGE', {
        name: this.name,
        text: this.text,
        time: moment().format('YYYY/MM/DD/ hh:mm:ss')
      });
      this.text = '';
    },
  },
  mounted() {
    // 投稿されたデータの取得
    this.socket.on('MESSAGE', data => {
      this.messages = [...this.messages, data];
    });
  }
};
</script>