export function cleanInput(user_str: string): string[]
{
    return user_str.trim().toLowerCase().split(" ").filter(function (e){return e;})
}