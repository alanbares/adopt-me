import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./FetchBreedList";

export default function useBreedlist(animal) {
  const results = useQuery(["breeds", animal], fetchBreedList);

  return [results?.data?.breeds ?? [], results.status];
}
