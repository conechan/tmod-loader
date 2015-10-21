module.exports = {
  entry: "./src/index.js",
  output: {
    path: "./build",
    publicPath: "/build/",
    filename: "build.js"
  },
  module: {
    loaders: [
      {
          test: /\.tpl$/,
          loader: "tmod",
          query: {
              // �������Ŀ¼����
              output: "./build",

              // �������������ʱ·��
              runtime: "src/template.js",

              // ����ģ����������﷨�����ÿ�ѡ��
              // simple: Ĭ���﷨�����ڶ�д���ɲο��﷨�ĵ�
              // native: ���ܷḻ������䡣�﷨����΢��ģ������ tmpl
              syntax: "simple",

              // ģ���ļ���׺
              suffix: '.tpl'
          } 
      }
    ]
  }
}