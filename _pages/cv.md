---
layout: single
title: "CV - Chenyuan Liu"
permalink: /cv/
---

<div style="text-align: center; margin: 20px 0;">
  <h2>Curriculum Vitae</h2>
  <p>
    <a href="/assets/documents/Chenyuan_Liu_CV.pdf" class="btn btn--primary" target="_blank" rel="noopener" download>
      <i class="fas fa-download"></i> Download PDF
    </a>
    <a href="/assets/documents/Chenyuan_Liu_CV.pdf" class="btn btn--info" target="_blank" rel="noopener">
      <i class="fas fa-external-link-alt"></i> Open in New Tab
    </a>
  </p>
</div>

<div id="pdf-container" style="width: 100%; height: 800px; border: 1px solid #ddd; margin: 20px 0;">
  <object 
    data="/assets/documents/Chenyuan_Liu_CV.pdf" 
    type="application/pdf" 
    width="100%" 
    height="100%">
    
    <embed 
      src="/assets/documents/Chenyuan_Liu_CV.pdf" 
      type="application/pdf" 
      width="100%" 
      height="100%">
      
      <div style="text-align: center; padding: 50px;">
        <p><strong>PDF cannot be displayed in this browser.</strong></p>
        <p>Please use one of the options above to view or download the CV.</p>
        <a href="/assets/documents/Chenyuan_Liu_CV.pdf" class="btn btn--primary" target="_blank">
          <i class="fas fa-download"></i> Download CV (PDF)
        </a>
      </div>
      
    </embed>
  </object>
</div>

<!-- 备用方案：Google Docs Viewer -->
<div id="google-viewer" style="display: none; width: 100%; height: 800px; margin: 20px 0;">
  <iframe 
    src="https://docs.google.com/viewer?url={{ site.url | append: '/assets/documents/Chenyuan_Liu_CV.pdf' | url_encode }}&embedded=true" 
    width="100%" 
    height="100%" 
    style="border: none;">
  </iframe>
</div>

<script>
// 检测PDF是否能正常加载
function checkPdfSupport() {
  var object = document.querySelector('object');
  var embed = document.querySelector('embed');
  
  // 如果浏览器不支持PDF，显示Google Viewer
  setTimeout(function() {
    if (!navigator.mimeTypes['application/pdf']) {
      document.getElementById('pdf-container').style.display = 'none';
      document.getElementById('google-viewer').style.display = 'block';
    }
  }, 1000);
}

// 页面加载完成后检查
document.addEventListener('DOMContentLoaded', checkPdfSupport);
</script>
