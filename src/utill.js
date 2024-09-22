import dayjs from "dayjs";

export function getMonth(month = dayjs().month()) { //Nếu không có tham số nào được truyền vào hàm getMonth(), thì hàm sẽ lấy tháng hiện tại.
    const year = dayjs().year(); // Lấy năm hiện tại từ dayjs().
    const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day(); // Ngày đầu tiên của tháng
    let currentMonthCount = 1 - firstDayOfTheMonth; // Bắt đầu đếm từ ngày đầu tiên của tuần chứa ngày 1
    const daysMatrix = new Array(6).fill(null).map(() => {
        return new Array(7).fill(null).map(() => {
            const day = dayjs(new Date(year, month, currentMonthCount));
            currentMonthCount++;
            return day;
        });
    });
    return daysMatrix;
}
