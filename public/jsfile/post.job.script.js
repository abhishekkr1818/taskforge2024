document.querySelector('.post-job').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const job = Object.fromEntries(formData.entries());
    job.budget = Number(job.budget);

    try {
        const response = await fetch('/api/v1/job/jobposting', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(job)
        });
        const data = await response.json();
        if (response.ok) {
            alert("Job posted successfully");
            window.location.href='/homeorg'
        } else {
            alert("Job not posted");
        }
    } catch (error) {
        console.log("Something went wrong", error);
    }
});
