
export default {
    build: {
      lib: {
        entry: 'src/main.js', // 入口文件
        name: 'MyLibrary', // 库的名称
        fileName: 'my-library', // 输出的文件名
        formats: ['umd'], // 打包的格式
      },
    },
  };
