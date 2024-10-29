import { client } from "@/lib/rpc";
import { useQuery } from "@tanstack/react-query";
// post

export const useCurrent = () => {
    const query = useQuery({
        queryKey: ["current"],
        queryFn: async () => {
                const response = await client.api.auth.current.$get();
                if(!response.ok) {
                return null;
                //에러 보내기
            }
            const { data } = await response.json();

            return data;
        },
    });
    return query;
}


//current : 유저 정보를 불러오는 기능