"use client";

import {
  Card,
  CardBody,
  CardHeader,
  Chip,
  Image,
  Progress,
  Spinner,
} from "@heroui/react";
import { useCallback, useEffect, useState } from "react";
import { HourglassSplit, CodeSlash, Laptop } from "react-bootstrap-icons";

interface Language {
  name: string;
  percent: number;
  text: string;
}

interface User {
  languages: Language[];
  human_readable_total: string;
  editors: { name: string }[];
  operating_systems: { name: string }[];
}

export const Stats = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchWakaTimeData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/wakatime");
      const data = await response.json();
      setUser(data?.data);
    } catch (error: any) {
      setError(error?.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchWakaTimeData();
  }, [fetchWakaTimeData]);

  const renderLanguage = (language: Language) => (
    <div key={language.name} className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-gray-700 dark:text-white">
          {language.name}
        </span>
        <span className="text-sm font-medium text-gray-700 dark:text-white">
          {language.text}
        </span>
      </div>
      <Progress value={language.percent} color="primary" />
    </div>
  );

  if (loading) {
    return (
      <Card>
        <CardBody className="flex items-center justify-center">
          <Spinner />
        </CardBody>
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <CardBody>
          <p className="text-danger-500">Error fetching WakaTime data.</p>
        </CardBody>
      </Card>
    );
  }

  return (
    <Card className="p-4">
      <CardHeader>
        <h1 className="text-2xl font-bold">My Stats (from WakaTime)</h1>
      </CardHeader>
      <CardBody>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="order-2 lg:order-1">
            <h2 className="text-xl font-semibold mb-4">Top Languages</h2>
            {user?.languages?.map(renderLanguage)}
          </div>

          <div className="order-1 lg:order-2">
            <Image
              src="/images/code.jpg"
              width="auto"
              height={250}
              className="w-full h-32 mb-4"
            />
            <div className="grid grid-cols-3 gap-2">
              <div className="flex rounded-xl bg-background/40 px-4 items-center h-24 text-left">
                <HourglassSplit className="mr-3 text-2xl" />
                <div>
                  <p className="font-semibold text-xs mb-2">Total Time</p>
                  <p>{user?.human_readable_total}</p>
                </div>
              </div>
              <div className="flex rounded-xl bg-background/40 px-4 items-center h-24 text-left">
                <CodeSlash className="mr-3 text-2xl" />
                <div>
                  <p className="font-semibold text-xs mb-2">Editor</p>
                  <Chip color="primary">{user?.editors[0]?.name}</Chip>
                </div>
              </div>
              <div className="flex rounded-xl bg-background/40 px-4 items-center h-24 text-left">
                <Laptop className="mr-3 text-2xl" />
                <div>
                  <p className="font-semibold text-xs mb-2">Operating System</p>
                  <Chip color="secondary">
                    {user?.operating_systems[0]?.name}
                  </Chip>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
