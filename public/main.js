
function deleteJob(id) {
    const result = confirm(`Are you sure you want to delete this Job?`);
    if(result) {
        fetch("/deletejob/"+id, {
            method: "POST"
        }).then(res => {
            if(res.ok){
                location.reload();
            }
        });
    }
}