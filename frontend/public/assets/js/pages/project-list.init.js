var favouriteBtn=document.querySelectorAll(".favourite-btn");favouriteBtn&&Array.from(document.querySelectorAll(".favourite-btn")).forEach((function(e){e.addEventListener("click",(function(e){this.classList.toggle("active")}))}));var removeProduct=document.getElementById("removeProjectModal");removeProduct&&removeProduct.addEventListener("show.bs.modal",(function(e){document.getElementById("remove-project").addEventListener("click",(function(t){e.relatedTarget.closest(".project-card").remove(),document.getElementById("close-modal").click()}))}));