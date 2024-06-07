import { createSelector } from 'reselect';

const airflowUsers = state => state.dashboard.airflowData.users;
const airflowCalls = state => state.dashboard.airflowData.calls;
const newCustomers = state => state.dashboard.customerData.latest;
const lostCustomers = state => state.dashboard.customerData.closed;

export const callsPerUser = createSelector(
    airflowUsers,
    airflowCalls,
    (users, calls) => {
        users.forEach(user => {
            user.calls = calls.filter(call => call.user ? call.user.id === user.id : false)
        });
        return users;
    }
)

export const callTimePerUser = createSelector(
    callsPerUser,
    userData => {         
        userData.forEach(user => {
            let seconds = 0;
            user.calls.forEach(call => {
                seconds = seconds + call.duration
            });
            user.total_call_duration = seconds;
        });
        return userData.sort((a,b) => (a.total_call_duration < b.total_call_duration) ? 1 : ((b.total_call_duration < a.total_call_duration) ? -1 : 0));
    }
)

export const callDataPerUser = createSelector(
    callTimePerUser,
    userData => userData.sort((a,b) => (a.calls.length < b.calls.length) ? 1 : ((b.calls.length < a.calls.length) ? -1 : 0))
)

export const mrrGain = createSelector(
    newCustomers,
    customers => {
        let todaysMrr = 0;
        if (customers) {
            const todaysCustomers = customers.filter(customer => new Date().setHours(0,0,0,0) === new Date(customer.started_at.split('T')[0]).setHours(0,0,0,0))
            todaysCustomers.forEach(customer => todaysMrr = todaysMrr + customer.mrr);
        }
        return todaysMrr;
    }
)

export const mrrLoss = createSelector(
    lostCustomers,
    customers => {
        let todaysLostMrr = 0;
        if (customers) {
            const todaysCustomers = customers.filter(customer => new Date().setHours(0,0,0,0) === new Date(customer.cancelled_at.split('T')[0]).setHours(0,0,0,0))
            todaysCustomers.forEach(customer => todaysLostMrr = todaysLostMrr + customer.mrr);
        }
        return todaysLostMrr;
    }
)

export const totalCalls = createSelector(
    callsPerUser,
    users => {
        let allCalls = 0;
        users.forEach(user => allCalls = allCalls + user.calls.length);
        return allCalls;
    }
)

export const totalCallTime = createSelector(
    callsPerUser,
    users => {
        let totalTime = 0;
        users.forEach(user => totalTime = totalTime + user.total_call_duration);
        return totalTime;
    }
)