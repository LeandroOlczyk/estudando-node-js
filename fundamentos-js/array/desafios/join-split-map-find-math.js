function planParkDay(schedules, inventory, audienceCounts, tasks) {

    let summary = []
    for (let i = 0; i < audienceCounts.length; i++) {
        summary.push(schedules[i], '(',audienceCounts[i],')')
    };

    summary = summary.join('');

    let spaceNeeded = 0;
    audienceCounts.forEach(count => {
        spaceNeeded += Math.floor(count * 1.5);
    });

    const nextMaintenance = tasks
        .map(task => task.split(':'))
        .find(([taskName, taskStatus]) => taskStatus === 'pending')?.[0];

    return {
        summary,
        spaceNeeded,
        nextMaintenance
    };
}

let schedules, inventory, audienceCounts, tasks, result;

schedules = ['Classical@14:30', 'Pop@19:00'];
inventory = { "flute": 2, "drums": 1 };
audienceCounts = [100, 120];
tasks = ['paint-fence:completed', 'check-sound:pending'];

result = planParkDay(schedules, inventory, audienceCounts, tasks);
console.log(result);

/*
    {
        summary: "Classical@14:30(100)Pop@19:00(120)",
        spaceNeeded: 330,
        nextMaintenance: "check-sound"
    }
*/
