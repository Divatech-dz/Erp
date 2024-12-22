import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'


interface TabConfig {
  label: string; 
  value: string; 
  content?: React.ReactNode; 
}

interface BillTabsProps {
  tabs: TabConfig[]; 
  defaultValue: string; 
}

export const BillTabs: React.FC<BillTabsProps>= ({ tabs, defaultValue }) => {
  return (
    <Tabs defaultValue={defaultValue} className="w-fit bg-gray-50 p-2">
      <TabsList className="grid w-full grid-cols-4 gap-3">
        {tabs.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value} className="bg-white">
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  )
}

