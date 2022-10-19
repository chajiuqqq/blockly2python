# 从 Blockly 到 Python 的可视化开发环境

> 本项目归属于上海师范大学-李鲁群教授实验室

本项目是从 Blockly 到 Python 的进阶课程。项目基于 Blockly 可视化拖拽的编程方法，设计了一套从 Blockly 到 Python 数据分析与可视化教学平台及案例。

系统从Blockly 图形代码设计程序，然后系统自动生成 Python 代码（含 Pandas、Matplotlib、Seaborn 可视化），并自动启动 Jupyter Notebook 运行所生成的Python 代码，得到运行结果。 

项目可以实现实验数据预处理、数据计算、数据回顾分析、数据可视化过程设计过程。项目教学内容非常适合中学阶段的物理、化学、数学、生物等实验数据处理与可视化。通过本课程的学习，学生可以掌握基本的数据分析与可视化的概念与方法。 

demo：http://blockly.chajiuqqq.cn/
## 开始使用
点击index.html开始使用

## 安装jupyter方法

1. 下载[miniconda](https://docs.conda.io/en/latest/miniconda.html)，并安装
2. bin文件夹下包含安装conda环境的脚本。
   - windows用户依此双击第一、第二个bat文件进行安装，点击第三个bat运行jupyter
   - mac用户在bin/mac下打开“终端”，运行命令：`source run.sh`，脚本会自动创建环境，安装依赖，并自动打开jupyter notebook
## 依赖
- python==3.10
- pandas
- jupyter
- openpyxl
- matplotlib


