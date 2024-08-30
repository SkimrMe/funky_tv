/* 简易视频播放器 */  
var video = document.getElementById('myVideo');  
                var progressBar = document.getElementById('customProgressBar');  
                var fill = document.querySelector('.custom-progress-bar .fill');  
                  
                // 监听mousedown事件开始拖动  
                progressBar.addEventListener('mousedown', function(e) {  
                  // 防止默认行为  
                  e.preventDefault();  
                  
                  // 开始拖动  
                  document.addEventListener('mousemove', onDrag);  
                  document.addEventListener('mouseup', onDragEnd);  
                  
                  // 获取初始点击位置  
                  var startX = e.pageX - progressBar.offsetLeft;  
                });  
                  
                function onDrag(e) {  
                  // 计算新的进度位置  
                  var newPercent = (e.pageX - progressBar.offsetLeft) / progressBar.offsetWidth;  
                  newPercent = Math.min(Math.max(0, newPercent), 1); // 限制在0到1之间  
                  
                  // 更新视频播放位置  
                  video.currentTime = video.duration * newPercent;  
                  
                  // 更新进度条宽度  
                  fill.style.width = (newPercent * 100) + '%';  
                }  
                  
                function onDragEnd() {  
                  // 停止拖动  
                  document.removeEventListener('mousemove', onDrag);  
                  document.removeEventListener('mouseup', onDragEnd);  
                }  
                  
                // 视频加载元数据后初始化进度条  
                video.addEventListener('loadedmetadata', function() {  
                  // 设置初始进度  
                  updateProgressBar();  
                });  
                  
                // 更新进度条  
                function updateProgressBar() {  
                  var percent = (video.currentTime / video.duration) * 100;  
                  fill.style.width = percent + '%';  
                }  
                  
                // 监听视频播放过程中的时间更新  
                video.addEventListener('timeupdate', updateProgressBar);  
                
                //调节控制音量初始化
                var myVideo = document.getElementById("myVideo");  
                    myVideo.volume = 0.5; // 设置默认音量为50%  
